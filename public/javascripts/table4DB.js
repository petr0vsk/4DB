//webix.ready(function(){

webix.ui({
				container:"table4DB",
				view:"datatable",

				columns:[
					{ id:"npp",	    header:"", width:100 },
					{ id:"context", header:"", width:200 },
					{ id:"value",	header:"", width:200 }
				],
                spans:true,
                select:"cell",
				autoheight:true,
				autowidth:true,
                header:false,
                select:"row",
				data:{
                    data:[
                        { id:"header_a", npp:"Форма 4-ДБ" },
                        { id:"header_b", npp:"Сведения об основных событиях, характеризующих состояние безопасности за прошедшую неделю с ... по ... 2015 г."},
                        { id:"header_c", npp:"Основные показатели" },
                        { id:"header_1", npp:"1.", context:"Наиболее значимая информация об обстановке в зоне ответственности ДЗ и вокруг его объектов (информация, необходимая для доклада исполнительному вице-президенту-руководителю Департамента по безопасности и ИТ ОАО АФК \"Система\" в соответсвии с п.1.13. формы 1-ДБ):" },
                        
                        { id:"1_1", npp:"1.1", context:"" }, 
                        { id:"1_2", npp:"1.2", context:"" }, 
                        { id:"header_2", npp:"2", context:"Информация о событиях по форме 1-ДБ, которая была направлена в Департамент по безопасности и ИТ за отчетный период (неделю), с обязательым уточнением информации и развитием событий:" },
                        { id:"header_2_1", npp:"2.1", context:"В области обеспечения антитеррористической защищеншности персонала и объектов:" },
                        { id:"2_1_1", npp:"2.1.1", context:"" }, 
                        { id:"2_1_2", npp:"2.1.2", context:"" },
                        { id:"header_2_2", npp:"2.2.", context:"В области экономической безопасности:" },
                        { id:"2_2_1", npp:"2.2.1.", context:"" }, 
                        { id:"2_2_2", npp:"2.2.2.", context:"" },
                        { id:"header_2_3", npp:"2.3.", context:"В области информационной безопасности:" },
                        { id:"2_3_1", npp:"2.3.1.", context:"Сведения об инцидентах информационной безопасности, направленных за текущий период по форме ДБ-1, и мерах, предпринятых по их расследованию и устранению последствий.", value: "" }, 
                        { id:"2_3_2", npp:"2.3.2.", context:"Сведения о ключевых событиях информационной безопасности, включая проектную деятельность, взаимодействие с регуляторами, пробемы ИБ, предложения по повышению защищенности", value: "" },
                         { id:"header_3", npp:"3.", context:"Информация о достигнутых в ходе проверок экономической деятельности наиболее значимых результатах" },
                        { id:"3_1", npp:"3.1", context:"Проведено проверок финансово-хозяйственной деяетльности (кол-во)", value: "" }, 
                        { id:"3_2", npp:"3.2.", context:"Установленный ущерб (руб.)", value: "" },
                        { id:"3_3", npp:"3.3.", context:"Установленный ущерб (руб.)", value: "" },
                        { id:"3_4", npp:"3.4.", context:"Установленный ущерб (руб.)", value: "" },
                        { id:"3_5", npp:"3.5.", context:"Установленный ущерб (руб.)", value: "" },
                        { id:"3_6", npp:"3.6.", context:"Установленный ущерб (руб.)", value: "" },
                        { id:"3_7", npp:"3.7.", context:"Установленный ущерб (руб.)", value: "" },
                        { id:"3_8", npp:"3.8.", context:"Установленный ущерб (руб.)", value: "" },
                        { id:"3_9", npp:"3.9.", context:"Установленный ущерб (руб.)", value: "" },
                        { id:"3_10", npp:"3.10.", context:"Установленный ущерб (руб.)", value: "" },
                        { id:"3_11", npp:"3.11.", context:"Установленный ущерб (руб.)", value: "" },
                        { id:"3_12", npp:"3.12.", context:"Установленный ущерб (руб.)", value: "" },
                        { id:"3_13", npp:"3.13.", context:"Установленный ущерб (руб.)", value: "" },
                        { id:"header_4", npp:"4", context:"Информация о выявленных угрозах экономическим интересам Корпоарции, ДЗК и ДЗО, имеющих признаки хищения, а также полученной сигнальной информации о противоправных действиях юридических/физических лиц, наносящих ДЗК и ДЗО материальный ущерб и/или ущерб деловой репутации." },
                         { id:"4_1", npp:"4.1.", context:"" }, 
                         { id:"4_2", npp:"4.2.", context:"" }, 
                         { id:"4_3", npp:"4.3.", context:"" }, 
                         { id:"4_4", npp:"4.4.", context:"" }
                        
                        
                      //  { id:1,   npp:"3.1", context: "Проведено проверок", value:""}
                       
                    ],
                    spans:[//id, column, width, height, value, css
                            ["header_a", "npp", 3, 1, null],
                            ["header_b", "npp", 3, 1, null],
                            ["header_c", "npp", 3, 1, null],
                            ["header_1", "context", 2, 1, null],
                            ["1_1", "context", 2, 1, null],
                            ["1_2", "context", 2, 1, null],
                            ["header_2", "context", 2, 1, null],
                            ["header_2_1", "context", 2, 1, null],
                            ["2_1_1", "context", 2, 1, null],
                            ["2_1_2", "context", 2, 1, null],
                            ["header_2_2", "context", 2, 1, null],
                            ["2_2_1", "context", 2, 1, null],
                            ["2_2_2", "context", 2, 1, null],
                            ["header_2_3", "context", 2, 1, null],
                            ["header_3", "context", 2, 1, null],
                            ["header_4", "context", 2, 1, null],
                            ["4_1", "context", 2, 1, null],
                            ["4_2", "context", 2, 1, null],
                            ["4_3", "context", 2, 1, null],
                            ["4_4", "context", 2, 1, null]
                            
                            
                        
                            
                    ]
                }
			});				
	



   /*       webix.ui({
         container:"table4DB",
         //------------------------------------ Шапка  таблицы --------------------------
      rows:[
            { view:"template",
                type:"header",
                css: "_my_head1",
                template:"Форма 4-ДБ" },
            { view:"template",
                type:"header",
                css: "_my_head2",
                template:"Сведения об основных событиях, характеризующие " +
                    "состояние безопасности, за<br> прошедшую неделю  с _____ по ____ 2015 г."},
            { view:"template",
                type:"header",
                css: "_my_head3",
                template:"Название ПБ" },
             { view:"template",
                type:"header",
                css: "_my_head3",
                template:"Основные показатели" },
            {

                view:"datatable",
                autoConfig:true,
                select:"row",
                resizeRow:true,
                resizeColumn:true,
                editable:true,
                autoheight:true,
                autowidth:true,
                columns:[
                    { id:"Nn1",      header: {text: "1.", rowspan: 2}},
                    { id:"Context1", header: {
                        text:"Наиболее значимая информация об обстановке в зоне ответственности ДЗО  и вокруг его объектов (информация, необходимая для доклада исполнительному вице-президенту-руководителю Департамента по безопасности и ИТ  ОАО АФК «Система» в соответствии с п.1.13. формы 1-ДБ):",
                        css:"multiline"

                    },
                        editor:"text",
                        width:1000,
                        fillspace:true}
                ],
                //------------------------------------ Строки для заполнения разела 1. таблицы  --------------------------
                data:[
                    { id:1, Nn1:"1.1", Context1:"", css:"multiline"},
                    { id:2, Nn1:"1.2", Context1:"", css:"multiline"}
                ]
            }, //here you place any component you like
            {view:"resizer"},
           
            {
                view:"datatable",
                scrollX:false,
                scrollY:false,
                autoheight:true,
                columns:[
                    { id:"Nn2",      header: {text: "2", rowspan: 2}},
                    { id:"Context2", header: {
                        text:"Информация о событиях по форме 1-ДБ, которая была направлена в Департамент по безопасности и ИТ за отчетный период (неделю), с обязательным уточнением информации и развитием событий:",
                        css:"multiline"
                    },
                        width:1000,
                        fillspace:true
                    }
                ]
            },
// ------- п. 2.1 --------------------------            
             {
                view:"datatable",
                scrollX:false,
                autoConfig:true,
                select:"row",
                resizeRow:true,
                resizeColumn:true,
                editable:true,
                autoheight:true,
                autowidth:true,
                columns:[
                    { id:"Nn2",      header: {text: "2.1"}},
                    { id:"Context2", header: {
                        text:"В области обеспечения антитеррористической озащищенности персонала объектов:"
                    },

                        editor:"text",
                        width:1000,
                        fillspace:true}
                ], 
                  //------------------------------------ Строки для заполнения разела 2.1. таблицы  --------------------------
                data:[
                    { id:211, Nn2:"2.1.1", Context1:"", css:"multiline"},
                    { id:212, Nn2:"2.1.2.", Context1:"", css:"multiline"}
                ]
            },
            {view:"resizer"},
 // ------- п. 2.2 --------------------------            
             {
                view:"datatable",
                scrollX:false,
                autoConfig:true,
                select:"row",
                resizeRow:true,
                resizeColumn:true,
                editable:true,
                autoheight:true,
                autowidth:true,
                columns:[
                    { id:"Nn22",      header: {text: "2.1"}},
                    { id:"Context2", header: {
                        text:"В области экономической безопасности:"
                    },

                        editor:"text",
                        width:1000,
                        fillspace:true}
                ], 
                  //------------------------------------ Строки для заполнения разела 2.2. таблицы  --------------------------
                data:[
                    { id:221, Nn22:"2.2.1", Context1:"", css:"multiline"},
                    { id:222, Nn22:"2.2.2.", Context1:"", css:"multiline"}
                ]
            },
            {view:"resizer"},  
            // ------- п. 2.3 заголовок --------------------------            
             {
                view:"datatable",
                scrollX:false,
                autoConfig:true,
                select:"row",
                resizeRow:true,
                resizeColumn:true,
                editable:true,
                autoheight:true,
                autowidth:true,
                columns:[
                    { id:"Nn23",      header: {text: "2.3"}},
                    { id:"Context2", header: {
                        text:"В области информационной безопасности:"
                    },

                        width:1000,
                        fillspace:true}
                ]
                 
            },
            // ------- п. 2.2 --------------------------            
             {
                view:"datatable",
                scrollX:false,
                autoConfig:true,
                select:"row",
                resizeRow:true,
                resizeColumn:true,
                editable:true,
                autoheight:true,
                autowidth:true,
                 adjust:true,
                header:false,
                columns:[
                    { id:"Nn231", rowspan: 3, css:"multiline"},
                    { id:"Text", rowspan: 3, width: 200, css:"multiline"},
                    { id:"Context23",rowspan: 3,  width: 800, css:"multiline",  editable:true,  editor:"text"},

                        
                ], 
                  //------------------------------------ Строки для заполнения разела 2.2. таблицы  --------------------------
                data:[
                    { id:221, Nn231:"2.3.1", Text: "Сведения об инцидентах информационной ",  Context23: ""},
                    { id:222, Nn231:"2.3.2.", Text: "Сведения о ключевых событиях", Context23:""}
                ]
            },
            
            
            
//---------------------------------------            
        ]
    });    //.ui 
//});
	
    
    */

