
webix.ui({
				container:"table2DB5DB",
				view:"datatable",

				columns:[
					{ id:"npp",	header:"", width:100 },
					{ id:"context", header:"" ,width:200},
					{ id:"value",	header:"" , width:200}
				],
                spans:true,
                select:"cell",
				autoheight:true,
				autowidth:true,
                header:false,
				data:{
                    data:[
                        { id:"sub1", npp:"Общий заголовок"},
                        { id:1, npp:"1.1", context: "Проведено проверок", value:""},
                       
                    ],
                    spans:[//id, column, width, height, value, css
                            ["sub1", "npp", 3, 1, null]
                            
                    ]
                }
			});				
	

