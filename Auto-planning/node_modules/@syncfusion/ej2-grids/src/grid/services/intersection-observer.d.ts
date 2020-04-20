import { SentinelInfo } from '../base/type';
import { InterSection, IGrid } from '../base/interface';
export declare type ScrollDirection = 'up' | 'down' | 'right' | 'left';
/**
 * InterSectionObserver - class watch whether it enters the viewport.
 * @hidden
 */
export declare class InterSectionObserver {
    private containerRect;
    private element;
    private fromWheel;
    private touchMove;
    private options;
    private parent;
    sentinelInfo: SentinelInfo;
    constructor(parent: IGrid, element: HTMLElement, options: InterSection);
    observe(callback: Function, onEnterCallback: Function): void;
    check(direction: ScrollDirection): boolean;
    private virtualScrollHandler;
    setPageHeight(value: number): void;
}
