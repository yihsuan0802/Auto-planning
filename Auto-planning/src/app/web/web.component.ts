import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-web',
    templateUrl: './web.component.html',
    styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
    container: any;
    web_object: any;

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.container = new Chart(<any>{
            chart: {
                backgroundColor: 'white',
                events: {
                    load: function () {

                        // Draw the flow chart
                        var ren = this.renderer,
                            colors = Highcharts.getOptions().colors,
                            rightArrow = ['M', 0, 0, 'L', 100, 0, 'L', 95, 5, 'M', 100, 0, 'L', 95, -5],
                            leftArrow = ['M', 100, 0, 'L', 0, 0, 'L', 5, 5, 'M', 0, 0, 'L', 5, -5];


                        // BP label
                        ren.label('BP', 60, 232)
                            .attr({
                                fill: colors[0],
                                stroke: 'white', 'stroke-width': 3,
                                r: 5,
                                width: 24,
                                padding: 17,
                                height: 20,
                            })
                            .css({
                                color: 'white',
                                fontSize: '18px'
                            })
                            .add()
                            .shadow(true);

                        // Arrow from BP to Tool List Web
                        ren.path(['M', 0, 0, 'L', 200, 0, 'L', 195, 5, 'M', 200, 0, 'L', 195, -5])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[3],
                            })
                            .translate(130, 260)
                            .add();

                        ren.label('Projection', 190, 235)
                            .css({
                                fontSize: '12px',
                                color: colors[3]
                            })
                            .add();

                        // Tool List Web label
                        ren.label('Tool List Web', 350, 240)
                            .attr({
                                r: 5,
                                width: 128,
                                height: 25,
                                fill: colors[0],
                                stroke: 'white',
                                'stroke-width': 2,
                                padding: 6,
                            })
                            .css({
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '18px'
                            })
                            .on('click', function () {
                                const elementList = document.querySelectorAll('.Tool-List_Block');
                                const element = elementList[0];
                                element.scrollIntoView({ behavior: 'smooth' })
                            })
                            .add();

                        // Arrow from Tool List Web to TUMS
                        ren
                            .path([
                                'M', 500, 230,
                                'L', 500, 170,
                                'C', 500, 100, 500, 120, 500, 115,
                                'L', 675, 115,
                                'L', 670, 110,
                                'M', 677, 115,
                                'L', 670, 120
                            ])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[0]
                            })
                            .add();

                        // Move In Summary Web label
                        ren.label('Move In Summary Web', 625, 238)
                            .attr({
                                fill: colors[5],
                                stroke: 'white',
                                'stroke-width': 2,
                                width: 200,
                                height: 25,
                                padding: 6,
                                r: 5,
                            })
                            .css({
                                color: 'white',
                                fontSize: '18px'
                            })
                            .on('click', function () {
                                const elementList = document.querySelectorAll('.Move-ins_Block');
                                const element = elementList[0];
                                element.scrollIntoView({ behavior: 'smooth' });
                            })
                            .add()
                            .shadow(true);

                        // Arrow from Tool List Web to Move In Summary Web
                        ren.path(['M', 180, 10, 'L', 280, 10, 'L', 275, 15, 'M', 280, 10, 'L', 275, -0])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[0]
                            })
                            .translate(330, 240)
                            .add();

                        ren.label('Tool List', 540, 228)
                            .css({
                                color: colors[0],
                                fontSize: '12px'
                            })
                            .add();

                        // Arrow from Move In Summary Web to Tool List Web
                        ren.path(['M', 280, 15, 'L', 180, 15, 'L', 185, 20, 'M', 179, 15, 'L', 185, 10])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[5]
                            })
                            .translate(330, 250)
                            .add();

                        ren.label('Tool ID', 540, 265)
                            .css({
                                color: colors[5],
                                fontSize: '12px'
                            })
                            .add();

                        // TIQ label
                        ren.label('TIQ', 1050, 235)
                            .attr({
                                fill: colors[1],
                                stroke: 'white',
                                'stroke-width': 2,
                                width: 32,
                                height: 25,
                                padding: 6,
                                r: 5
                            })
                            .css({
                                color: 'white',
                                fontSize: '18px'
                            })
                            .add()
                            .shadow(true);

                        // Arrow from Move In Summary Web to TIQ
                        ren.path(['M', 250, 5, 'L', 430, 5, 'L', 425, 10, 'M', 430, 5, 'L', 425, 0])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[5]
                            })
                            .translate(600, 245)
                            .add();

                        ren.label('Tool List & MiCAP ODD \n RISD', 880, 240)
                            .attr({
                                fill: '#ffffff',
                            })
                            .css({
                                color: colors[5],
                                fontSize: '12px',
                                width: 120,
                                height: 22
                            })
                            .add();

                        // Arrow from TIQ to Move In Summary Web
                        ren.path(['M', 430, 20, 'L', 250, 20, 'L', 255, 25, 'M', 249, 20, 'L', 255, 15])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[5]
                            })
                            .translate(600, 245)
                            .add();

                        // TUMS label
                        ren.label('TUMS', 680, 100)
                            .attr({
                                r: 5,
                                width: 55,
                                height: 22,
                                fill: colors[2],
                                stroke: 'white',
                                'stroke-width': 2,
                                padding: 6,
                            })
                            .css({
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '18px'
                            })
                            .on('click', function () {
                                const elementList = document.querySelectorAll('.TUMS_Block');
                                const element = elementList[0];
                                element.scrollIntoView({ behavior: 'smooth' });
                            })
                            .add();

                        // Arrow from Move In Summary Web to TUMS
                        ren.path(['M', 715, 228, 'L', 715, 150, 'L', 710, 155, 'M', 715, 148, 'L', 720, 155])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[5]
                            })
                            .add();

                        ren.label('Tool ID<br/>MiCAP ODD', 680, 170)
                            .attr({
                                fill: '#ffffff'
                            })
                            .css({
                                color: colors[5],
                                fontSize: '12px'
                            })
                            .add();

                        // MiCAP In-Service Web label
                        ren.label('<p onclick="test()">MiCAP In-Service Web</p>', 950, 32)
                            .attr({
                                r: 5,
                                width: 205,
                                height: 22,
                                fill: colors[3],
                                stroke: 'white',
                                'stroke-width': 2,
                                padding: 6,
                            })
                            .css({
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '18px'
                            })
                            .on('click', function () {
                                const elementList = document.querySelectorAll('.MiCAP-InServ_Block');
                                const element = elementList[0];
                                element.scrollIntoView({ behavior: 'smooth' });
                            })
                            .add();

                        // Arrow from TIQ to MiCAP In-Service Web
                        ren.path(['M', 1070, 225, 'L', 1070, 75, 'L', 1065, 80, 'M', 1070, 75, 'L', 1075, 80])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[1]
                            })
                            .add();

                        ren.label('TIQ Complete Tool', 1015, 130)
                            .attr({
                                fill: '#ffffff'
                            })
                            .css({
                                color: colors[1],
                                fontSize: '12px',

                            })
                            .add();

                        // MiCAP Report label
                        ren.label('MiCAP Report', 360, 30)
                            .attr({
                                r: 50,
                                width: 103,
                                height: 18,
                                fill: colors[3],
                                stroke: 'white',
                                'stroke-width': 2,
                                padding: 15,
                            })
                            .css({
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '15px',
                            })
                            .add();

                        // Arrow from MiCAP Report to Tool List Web
                        ren.path(['M', 420, 85, 'L', 420, 230, 'L', 415, 225, 'M', 420, 230, 'L', 425, 225])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[3]
                            })
                            .add();

                        ren.label('Tool Status', 388, 130)
                            .attr({
                                fill: '#ffffff'
                            })
                            .css({
                                color: colors[3],
                                fontSize: '12px'
                            })
                            .add();

                        // Arrow from MiCAP Report to MiCAP In-Service Web
                        ren.path(['M', 180, 5, 'L', 600, 5, 'L', 595, 10, 'M', 600, 5, 'L', 595, -0])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[3]
                            })
                            .translate(330, 45)
                            .add();

                        ren.label('MiCAP Detail Data', 670, 25)
                            .css({
                                color: colors[3],
                                fontSize: '12px'
                            })
                            .add();

                        // MiCAP System label
                        ren.label('MiCAP System', 40, 32)
                            .attr({
                                fill: colors[1],
                                stroke: 'white',
                                'stroke-width': 2,
                                width: 125,
                                height: 22,
                                padding: 6,
                                r: 5
                            })
                            .css({
                                color: 'white',
                                fontSize: '18px'
                            })
                            .add()
                            .shadow(true);

                        // Arrow from MiCAP System to MiCAP Report
                        ren.path(['M', 50, 5, 'L', 200, 5, 'L', 195, 10, 'M', 200, 5, 'L', 195, -0])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[1],
                            })
                            .translate(140, 45)
                            .add();

                        ren.label('MiCAP Detail Data', 205, 25)
                            .css({
                                fontSize: '12px',
                                color: colors[1]
                            })
                            .add();

                        // Static Capacity Web label
                        ren.label('Static Capacity Web', 620, 300)
                            .attr({
                                fill: colors[0],
                                stroke: 'white', 'stroke-width': 2,
                                width: 170,
                                height: 22,
                                padding: 6,
                                r: 5
                            })
                            .css({
                                color: 'white',
                                fontSize: '18px'
                            })
                            .on('click', function () {
                                const elementList = document.querySelectorAll('.Static-Capacity_Block');
                                const element = elementList[0];
                                element.scrollIntoView({ behavior: 'smooth' });
                            })
                            .add()
                            .shadow(true);

                        // Arrow from Tool List Web to Static Capacity Web
                        ren
                            .path([
                                'M', 500, 270,
                                'L', 500, 270,
                                'C', 500, 320, 500, 320, 500, 320,
                                'L', 615, 320,
                                'L', 610, 315,
                                'M', 615, 320,
                                'L', 610, 325
                            ])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[0]
                            })
                            .add();

                        // ECN/CL label
                        ren.label('ECN/CL', 620, 360)
                            .attr({
                                fill: colors[0],
                                stroke: 'white',
                                'stroke-width': 2,
                                width: 68,
                                height: 20,
                                padding: 6,
                                r: 5
                            })
                            .css({
                                color: 'white',
                                fontSize: '18px'
                            })
                            .add()
                            .shadow(true);

                        // Arrow from Tool List Web to ECN/CL
                        ren
                            .path([
                                'M', 500, 300,
                                'L', 500, 300,
                                'C', 500, 380, 500, 380, 500, 380,
                                'L', 615, 380,
                                'L', 610, 375,
                                'M', 615, 380,
                                'L', 610, 385
                            ])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[0]
                            })
                            .add();

                        // FCST Web label
                        ren.label('FCST Web', 620, 420)
                            .attr({
                                fill: colors[4],
                                stroke: 'white',
                                'stroke-width': 2,
                                width: 85,
                                height: 20,
                                padding: 5,
                                r: 5
                            })
                            .css({
                                color: 'white',
                                width: '150px',
                                fontSize: '18px'
                            })
                            .on('click', function () {
                                const elementList = document.querySelectorAll('.FCST_Block');
                                const element = elementList[0];
                                element.scrollIntoView({ behavior: 'smooth' });
                            })
                            .add()
                            .shadow(true);

                        // Arrow from Tool List Web to FCST Web
                        ren
                            .path([
                                'M', 500, 355,
                                'L', 500, 355,
                                'C', 500, 435, 500, 435, 500, 435,
                                'L', 615, 435,
                                'L', 610, 430,
                                'M', 615, 435,
                                'L', 610, 440
                            ])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[0]
                            })
                            .add();

                        // Arrow from Move In Summary Web to FCST Web
                        ren
                            .path([
                                'M', 817, 315,
                                'L', 817, 285,
                                'C', 817, 430, 817, 430, 817, 430,
                                'L', 730, 430,
                                'L', 735, 425,
                                'M', 730, 430,
                                'L', 735, 440
                            ])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[5]
                            })
                            .add();

                        ren.label('Location', 822, 350)
                            .css({
                                color: colors[5],
                                fontSize: '12px'
                            })
                            .add();

                        // BOM Table label
                        ren.label('BOM Table', 1070, 410)
                            .attr({
                                r: 45,
                                width: 78,
                                height: 18,
                                fill: colors[4],
                                stroke: 'white',
                                'stroke-width': 2,
                                padding: 14,
                            })
                            .css({
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            })
                            .add();

                        // Arrow from BOM Table to FCST Web
                        ren.path(['M', 735, 393, 'L', 400, 395, 'L', 405, 400, 'M', 400, 395, 'L', 405, 390])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[4]
                            })
                            .translate(330, 45)
                            .add();

                        ren.label('BOM', 900, 442)
                            .css({
                                color: colors[4],
                                fontSize: '12px'
                            })
                            .add();

                        // Budget Web label
                        ren.label('Budget Web', 1070, 320)
                            .attr({
                                fill: colors[4],
                                stroke: 'white',
                                'stroke-width': 2,
                                width: 105,
                                height: 22,
                                padding: 5,
                                r: 5
                            })
                            .css({
                                color: 'white',
                                fontSize: '18px'
                            })
                            .add()
                            .shadow(true);

                        // Arrow from BOM Table to Budget Web
                        ren.path(['M', 1130, 405, 'L', 1130, 365, 'L', 1125, 370, 'M', 1130, 365, 'L', 1135, 370])
                            .attr({
                                'stroke-width': 3,
                                stroke: colors[4]
                            })
                            .add();

                        ren.label('BOM', 1115, 375)
                            .attr({
                                fill: '#ffffff'
                            })
                            .css({
                                color: colors[4],
                                fontSize: '12px'
                            })
                            .add();

                    }
                }
            },
            title: {
                text: '',
                style: {
                    color: 'black'
                }
            },
            accessibility: {
                typeDescription: 'Flowchart'
            }


        })
        this.web_object = [
            {
                imgL: './assets/image/System_ToolList.png',
                titleL: "Tool List Web",
                contentL: "The platform that publish the investment list by each Scenario, slao can make version comparison and show the change log between different version.",
                linkL: 'https://web.tatw.micron.com/F16Reporting/ToollistWeb/SummaryReport/AnalysisReport.aspx',
                classNameL: 'Tool-List_Block',
                ownerL: 'IE Capacity Planning, Kevin Lin',
                developerL: 'Klay Han',
                imgR: './assets/image/System_Moveins.png',
                titleR: "Move In Summary Web",
                contentR: "Link Move in web and Planning web, and synchronization of TIQ data to integrated management equipment move in / out process.",
                linkR: 'http://web.tatw.micron.com/F16Reporting/MarkingList/ToolInvestmentInformation/ToolInvestmentInformation.aspx',
                classNameR: 'Move-ins_Block',
                ownerR: 'IE Layout, Joan Fan',
                developerR: 'Manru Cheng'
            },
            {
                imgL: './assets/image/System_StaticCapacity.png',
                titleL: "Static Capacity Web",
                contentL: "The system integrates PDM and tool list information to analyze whether each WS meets the capacity of the future fiscal year. The static capacity report can help to perform the future capital plan.",
                linkL: 'http://webtest.tatw.micron.com/F16Reporting/Capacity%20Web/StaticCapacity.aspx',
                classNameL: 'Static-Capacity_Block',
                ownerL: 'IE Capacity Planning, Kevin Lin',
                developerL: 'Manru Cheng',
                imgR: './assets/image/System_Heatmap.png',
                titleR: "Heatmap Web",
                contentR: "A system which able to integrate all information of OMT capacity and come out real constraints in network.",
                linkR: 'http://webtest.tatw.micron.com/F16Reporting/Capacity_HeatMap/Summary.aspx',
                classNameR: 'Heatmap_Block',
                ownerR: 'IE Capacity Planning, Kevin Lin',
                developerR: 'Manru Cheng'
            },
            {
                imgL: './assets/image/System_TUMS.png',
                titleL: "TUMS",
                contentL: "For tool request and facility capacity management and establish a robust utility matrix system as the base information for base build design and hookup work.",
                linkL: 'https://web.tatw.micron.com/TUMS/Default.aspx',
                classNameL: 'TUMS_Block',
                ownerL: 'Facility, Ben Lin',
                developerL: 'Klay Han',
                imgR: './assets/image/System_InServ.png',
                titleR: "MiCAP In-Service Web",
                contentR: "The latest news",
                linkR: 'http://web.tatw.micron.com/F16Reporting/MiCAP%20In-service/Default.aspx',
                classNameR: 'MiCAP-InServ_Block',
                ownerR: 'IE Layout, Joan Fan',
                developerR: 'Manru Cheng'
            },
            {
                imgL: './assets/image/System_FCST.png',
                titleL: "FCST",
                contentL: "Through a semi-automated system, all data can be updated, and stable analysis reports can be automatically produced, such as annual budget reports.",
                linkL: 'http://web.tatw.micron.com/F16Reporting/MaterialFCSTAnalysis/HighlightInformation/StatisticalAnalysisChart.aspx',
                classNameL: 'FCST_Block',
                ownerL: 'PMO, Ruby Lin',
                developerL: 'Manru Cheng',
                imgR: './assets/image/System_Others.png',
                titleR: "Others",
                contentR: "Other content.",
                linkR: 'http://web.tatw.micron.com/F16Reporting/maintainui/Default',
                classNameR: 'Others_Block',
                ownerR: 'IE Layout, Joan Fan',
                developerR: '*'
            }
        ]
    }

    scrollToBlock(classname: string) {
        const elementList = document.querySelectorAll('.' + classname);
        const element = elementList[0];
        element.scrollIntoView({ behavior: 'smooth' });

    }
}
