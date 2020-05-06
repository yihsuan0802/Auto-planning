/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
import * as ɵngcc0 from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableDirective } from './angular-datatables.directive';
var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule_1 = DataTablesModule;
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule_1
        };
    };
    var DataTablesModule_1;
DataTablesModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DataTablesModule });
DataTablesModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DataTablesModule_Factory(t) { return new (t || DataTablesModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DataTablesModule, { declarations: function () { return [DataTableDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [DataTableDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DataTablesModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [DataTableDirective],
                exports: [DataTableDirective]
            }]
    }], function () { return []; }, null); })();
    return DataTablesModule;
}());
export { DataTablesModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kYXRhdGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiYW5ndWxhci1kYXRhdGFibGVzLm1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O2dEQU95QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbC1saW4vYW5ndWxhci1kYXRhdGFibGVzL21hc3Rlci9MSUNFTlNFXG4gKi9cbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0YVRhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9hbmd1bGFyLWRhdGF0YWJsZXMuZGlyZWN0aXZlJztcbnZhciBEYXRhVGFibGVzTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERhdGFUYWJsZXNNb2R1bGUoKSB7XG4gICAgfVxuICAgIERhdGFUYWJsZXNNb2R1bGVfMSA9IERhdGFUYWJsZXNNb2R1bGU7XG4gICAgRGF0YVRhYmxlc01vZHVsZS5mb3JSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IERhdGFUYWJsZXNNb2R1bGVfMVxuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIERhdGFUYWJsZXNNb2R1bGVfMTtcbiAgICBEYXRhVGFibGVzTW9kdWxlID0gRGF0YVRhYmxlc01vZHVsZV8xID0gX19kZWNvcmF0ZShbXG4gICAgICAgIE5nTW9kdWxlKHtcbiAgICAgICAgICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbRGF0YVRhYmxlRGlyZWN0aXZlXSxcbiAgICAgICAgICAgIGV4cG9ydHM6IFtEYXRhVGFibGVEaXJlY3RpdmVdXG4gICAgICAgIH0pXG4gICAgXSwgRGF0YVRhYmxlc01vZHVsZSk7XG4gICAgcmV0dXJuIERhdGFUYWJsZXNNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgRGF0YVRhYmxlc01vZHVsZSB9O1xuIl19