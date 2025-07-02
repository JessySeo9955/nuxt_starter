// https://nuxt.com/docs/getting-started/testing#mocknuxtimport
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mockNuxtImport } from '@nuxt/test-utils/runtime';
import { setupGlobalLoading } from '@/plugins/02.init-loading';

// Create hoisted mocks
const { useGlobalLoading, useRouter, onNuxtReady, nextTick } = vi.hoisted(() => {
    return {
        useGlobalLoading: vi.fn(),
        useRouter: vi.fn(),
        onNuxtReady: vi.fn(),
        nextTick: vi.fn(),
    };
});

// Mock the Nuxt composables
mockNuxtImport('useGlobalLoading', () => useGlobalLoading);
mockNuxtImport('useRouter', () => useRouter);
mockNuxtImport('onNuxtReady', () => onNuxtReady);
mockNuxtImport('nextTick', () => nextTick);

describe('loading.plugin', () => {
    let mockStart: ReturnType<typeof vi.fn>;
    let mockFinish: ReturnType<typeof vi.fn>;
    let mockBeforeEach: ReturnType<typeof vi.fn>;
    let mockAfterEach: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        // Create fresh mocks for each test
        mockStart = vi.fn();
        mockFinish = vi.fn();
        mockBeforeEach = vi.fn();
        mockAfterEach = vi.fn();

        useGlobalLoading.mockReturnValue({
            start: mockStart,
            finish: mockFinish,
        });
        useRouter.mockReturnValue({
            beforeEach: mockBeforeEach,
            afterEach: mockAfterEach,
        });
        vi.clearAllMocks();
    });

    it('should register router hooks and onNuxtReady callback', () => {
        // Arrange
        nextTick.mockImplementation(cb => cb()); // simulate nextTick
        onNuxtReady.mockImplementation(cb => cb()); // simulate onNuxtReady

        // Act
        setupGlobalLoading();

        // Assert composables were used
        expect(useGlobalLoading).toHaveBeenCalled();
        expect(useRouter).toHaveBeenCalled();
        expect(onNuxtReady).toHaveBeenCalled();

        // Assert router hooks were registered
        expect(mockBeforeEach).toHaveBeenCalledWith(expect.any(Function));
        expect(mockAfterEach).toHaveBeenCalledWith(expect.any(Function));

        // Simulate route navigation
        const beforeHook = mockBeforeEach.mock.calls[0][0];
        beforeHook();
        expect(mockStart).toHaveBeenCalledTimes(2); // one from init, one from beforeHook

        const afterHook = mockAfterEach.mock.calls[0][0];
        afterHook();
        expect(mockFinish).toHaveBeenCalledTimes(2); // one from onNuxtReady, one from afterEach
    });
});
