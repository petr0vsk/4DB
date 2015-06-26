
webix.ui({
				container:"table2DB5DB",
                id:"layout2DB5DB",
                //width: 960,
                rows: [
                    {template:"Форма 4-ДБ", height: 35},
                    {template:"Сведения об основных событиях, характеризующих состояние безопасности за прошедшую неделю с ... по ... 2015 г.", height: 35},
                    {template:"Основные показатели", height: 35},
                    {cols: [
                        {
                            template:"2", width: 50
                        },
                        {
                            template:"Информация о событиях по форме 1-ДБ, которая была направлена в Департамент по безопасности и ИТ за отчетный период (неделю), с обязательым уточнением информации и развитием событий::"
                        }

                    ], height: 95},
                    {minHeight: 70,
                        view:"datatable",
                        header:false,
                        editable:true,
                        editaction: "dblclick",
                        resizeColumn:true,
                        resizeRow:true,
                        scrollX:false,
                        scrollY:false,
                        columns:[
                            { id:"npp",	    header:"" , width:50},
                            { id:"value",	header:"" , width:925 ,editor:"text"}
                        ],
                            data:[
                                { id:"1_1", npp:"1.1", value:""},
                                { id:"1_2", npp:"1.2", value:"" }
                            ]
                    },
                    {cols: [
                        {
                            template:"2", width: 50
                        },
                        {
                            template:"Наиболее значимая информация об обстановке в зоне ответственности ДЗ и вокруг его объектов (информация, необходимая для доклада исполнительному вице-президенту-руководителю Департамента по безопасности и ИТ ОАО АФК \"Система\" в соответсвии с п.1.13. формы 1-ДБ):"
                        }

                    ], height: 95},
                    {cols: [
                        {
                            template:"2.1", width: 50
                        },
                        {
                            template:"В области обеспечения антитеррористической защищеншности персонала и объектов:"
                        }

                    ], height: 35},
                    {minHeight: 70,
                        view:"datatable",
                        header:false,
                        editable:true,
                        editaction: "dblclick",
                        resizeColumn:true,
                        resizeRow:true,
                        scrollX:false,
                        scrollY:false,
                        columns:[
                            { id:"npp",	    header:"" , width:50},
                            { id:"value",	header:"" , width:925 ,editor:"text"}
                        ],
                        data:[
                            { id:"1_1", npp:"2.1.1", value:""},
                            { id:"1_2", npp:"2.1.2", value:"" }
                        ]
                    },
                    {cols: [
                        {
                            template:"2.1", width: 50
                        },
                        {
                            template:"В области обеспечения экономической безопасности:"
                        }

                    ], height: 35},
                    {minHeight: 70,
                        view:"datatable",
                        header:false,
                        editable:true,
                        editaction: "dblclick",
                        resizeColumn:true,
                        resizeRow:true,
                        scrollX:false,
                        scrollY:false,
                        columns:[
                            { id:"npp",	    header:"" , width:50},
                            { id:"value",	header:"" , width:925 ,editor:"text"}
                        ],
                        data:[
                            { id:"1_1", npp:"2.2.1", value:""},
                            { id:"1_2", npp:"2.2.2", value:"" }
                        ]
                    },
                    {cols: [
                        {
                            template:"2.3", width: 50
                        },
                        {
                            template:"В области информмационной безопасности:"
                        }

                    ], height: 35},
                    {minHeight: 400,
                        view:"datatable",

                        header:false,
                        editable:true,
                        editaction: "dblclick",
                        resizeColumn:true,
                        resizeRow:true,
                        scrollX:false,
                        scrollY:false,
                        rowHeight:200,
                        columns:[
                            { id:"npp",	    header:"", width:50, height:200},
                            { id:"context", header:"", width:300, fillspace:true, css:"multiline"},
                            { id:"value",	header:"" , width:610 ,editor:"text"}
                        ],
                        data:[
                            { id:"1_1", npp:"2.3.1", context:"Сведения об инцидентах информационной безопасности, направленных за текущий период по форме ДБ-1, и мерах, предпринятых по их расследованию и устранению последствий.", value:""},
                            { id:"1_2", npp:"2.3.2", context:"Сведения о ключевых событиях информационной безопасности, включая проектную деятельность, взаимодействие с регуляторами, пробемы ИБ, предложения по повышению защищенности", value:"" }
                        ]
                    }





                ]   // rows:
            });		// webix.ui
	

