webix.ready(function(){

table4D = webix.ui({
				container:"table4DB",
				view:"datatable",
                id:"table4D",
                editable:true,
                editaction: "click",
                //hover:"myhover",
                autoConfig:true,
                autoheight:true,
                autowidth:true,
                resizeColumn:true,
                resizeRow:true,
                adjust:true,
                spans:true,
                select:"cell",
                        on:{
                            'onItemClick': function() {

                                var id2 = this.getSelectedId([1,0]);
                                table4D.editColumn("value");
                            //   var item = this.getItem(id2).value;
                            //   console.log("you have clicked an cell " + id2);
                            //   console.log(item);
                                //var item = this.getSelectedItem();
                                //console.log( item.npp + item.context + item.value);
                                //editCell(1, "value", true, true);
                                //table4D.edit(id2);
                            }
                            },
                header:false,
                columns:[
					{ id:"npp",	    header:"" , width:50, fillspace:true},
					{ id:"context", header:"" , width:300, fillspace:true},
					{ id:"value",	header:"" , width:610, fillspace:true}
				],
                data:{
                    data:[
                        { id:"header_a", npp:"Форма 4-ДБ"},
                        { id:"header_b", npp:"Сведения об основных событиях, характеризующих состояние безопасности за прошедшую неделю с ... по ... 2015 г."},
                        { id:"header_c", npp:"Основные показатели" },
                        { id:"header_1", npp:"1.", context:"Наиболее значимая информация об обстановке в зоне ответственности ДЗ и вокруг его объектов (информация, необходимая для доклада исполнительному вице-президенту-руководителю Департамента по безопасности и ИТ ОАО АФК \"Система\" в соответсвии с п.1.13. формы 1-ДБ):" },
                        { id:"1_1", npp:"1.1", context:""},
                        { id:"1_2", npp:"1.2" },
                        { id:"header_2", npp:"2", context:"Информация о событиях по форме 1-ДБ, которая была направлена в Департамент по безопасности и ИТ за отчетный период (неделю), с обязательым уточнением информации и развитием событий:" },
                        { id:"header_2_1", npp:"2.1", context:"В области обеспечения антитеррористической защищеншности персонала и объектов:" },
                        { id:"2_1_1", npp:"2.1.1", context:"" }, 
                        { id:"2_1_2", npp:"2.1.2", context:"" },
                        { id:"header_2_2", npp:"2.2.", context:"В области экономической безопасности:" },
                        { id:"2_2_1", npp:"2.2.1.", context:"" }, 
                        { id:"2_2_2", npp:"2.2.2.", context:"" },
                        { id:"header_2_3", npp:"2.3.", context:"В области информационной безопасности:" },
                        { id:"2_3_1", npp:"2.3.1.", context:"Сведения об инцидентах информационной безопасности, направленных за текущий период по форме ДБ-1, и мерах, предпринятых по их расследованию и устранению последствий.", value: "", $cellCss:{value:"editable"}},
                        { id:"2_3_2", npp:"2.3.2.", context:"Сведения о ключевых событиях информационной безопасности, включая проектную деятельность, взаимодействие с регуляторами, пробемы ИБ, предложения по повышению защищенности", value: "", $cellCss:{value:"editable"}},
                        { id:"header_3", npp:"3.", context:"Информация о достигнутых в ходе проверок экономической деятельности наиболее значимых результатах" },
                        { id:"3_1", npp:"3.1", context:"Проведено проверок финансово-хозяйственной деяетльности (кол-во)", value: "", $cellCss:{value:"editable"}},
                        { id:"3_2", npp:"3.2.", context:"Установленный ущерб (руб.)", value: "", $cellCss:{value:"editable"}},
                        { id:"3_3", npp:"3.3.", context:"Установленный ущерб (руб.)", value: "", $cellCss:{value:"editable"}},
                        { id:"3_4", npp:"3.4.", context:"Установленный ущерб (руб.)", value: "", $cellCss:{value:"editable"}},
                        { id:"3_5", npp:"3.5.", context:"Установленный ущерб (руб.)", value: "", $cellCss:{value:"editable"}},
                        { id:"3_6", npp:"3.6.", context:"Установленный ущерб (руб.)", value: "", $cellCss:{value:"editable"}},
                        { id:"3_7", npp:"3.7.", context:"Установленный ущерб (руб.)", value: "", $cellCss:{value:"editable"}},
                        { id:"3_8", npp:"3.8.", context:"Установленный ущерб (руб.)", value: "", $cellCss:{value:"editable"}},
                        { id:"3_9", npp:"3.9.", context:"Установленный ущерб (руб.)", value: "", $cellCss:{value:"editable"}},
                        { id:"3_10", npp:"3.10.", context:"Установленный ущерб (руб.)", value: "", $cellCss:{value:"editable"}},
                        { id:"3_11", npp:"3.11.", context:"Установленный ущерб (руб.)", value: "", $cellCss:{value:"editable"}},
                        { id:"3_12", npp:"3.12.", context:"Установленный ущерб (руб.)", value: "", $cellCss:{value:"editable"}},
                        { id:"3_13", npp:"3.13.", context:"Установленный ущерб (руб.)", value: "", $cellCss:{value:"editable"}},
                        { id:"header_4", npp:"4", context:"Информация о выявленных угрозах экономическим интересам Корпоарции, ДЗК и ДЗО, имеющих признаки хищения, а также полученной сигнальной информации о противоправных действиях юридических/физических лиц, наносящих ДЗК и ДЗО материальный ущерб и/или ущерб деловой репутации." },
                        { id:"4_1", npp:"4.1."},
                        { id:"4_2", npp:"4.2."},
                        { id:"4_3", npp:"4.3."},
                        { id:"4_4", npp:"4.4."}
                        
                        
                      //  { id:1,   npp:"3.1", context: "Проведено проверок", value:""}
                       
                    ],
                    spans:[//id, column, width, height, value, css
                            ["header_a", "npp", 3, 1, null],
                            ["header_b", "npp", 3, 1, null],
                            ["header_c", "npp", 3, 1, null],
                            ["header_1", "context", 3, 1, null],
                           // ["header_1", "npp", 1, 2, null],
                            ["1_1", "context", 2, 1, null, "editable"],
                            ["1_2", "context", 2, 1, null, "editable"],
                            ["header_2", "context", 2, 1, null],
                            ["header_2_1", "context", 2, 1, null],
                            ["2_1_1", "context", 2, 1, null, "editable"],
                            ["2_1_2", "context", 2, 1, null, "editable"],
                            ["header_2_2", "context", 2, 1, null],
                            ["2_2_1", "context", 2, 1, null, "editable"],
                            ["2_2_2", "context", 2, 1, null, "editable"],
                            ["header_2_3", "context", 2, 1, null],
                            ["header_3", "context", 2, 1, null],
                            ["header_4", "context", 2, 1, null],
                            ["4_1", "context", 2, 1, null, "editable"],
                            ["4_2", "context", 2, 1, null, "editable"],
                            ["4_3", "context", 2, 1, null, "editable"],
                            ["4_4", "context", 2, 1, null, "editable"]
                            
                            
                        
                            
                    ]
                }
			});	// ---- webix.ui
    
    
   // table4D.adjust();
   //var TableWidth = $$("table4D").$width;
    //console.log("TableWidth = " + TableWidth);
    table4D.setRowHeight("header_1", 100);
    table4D.setRowHeight("header_2", 100);
    table4D.setRowHeight("2_3_1", 200);
    table4D.setRowHeight("2_3_2", 200);
    table4D.setRowHeight("3_1", 100);
    table4D.setRowHeight("header_4", 100);
    $$("table4D").addCellCss("1_1", "context", "editable");
    table4D.editCell("2_3_1", "value", true, true);
    table4D.editColumn("value");
    });	// ---- webix.ready
	




