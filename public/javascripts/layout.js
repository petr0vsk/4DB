/**
 * Created by avpetro1 on 14.07.2015.
 */


var toolbar = {
    view:"toolbar", paddingY:0,  elements:[
        {view:"tabbar", id:'tabbar', value: 'MainView', multiview:true, options: [
            { value: 'Главная', id: 'MainView'},
            { value: 'Ежнедельный отчет, ф. 4-ДБ', id: '4DBView'},
            { value: 'Ежемесячный отчет, ф. 5-ДБ', id: '5DBView'}]
        }
    ]
};



// при изменении размеров окна - подгоним под него размеры базового слоя
webix.event(window, "resize", function(){
    layout.adjust();
});


webix.ready(function(){
    layout = new webix.ui({
    container:"main_block",
    id:"main_block",
    sizeToContent:true,

    rows:[
         toolbar, //header
        { cols:[
            { template:"col 1", minHeight:150, width: 150},
            { template:"col 2", minHeight:600, id:"MainContainer",

                cells:[
                    {id:"MainView", template:"11111 ", container: "MainContainer"},
                    {id:"4DBView", template:"22222 ", container: "MainContainer"},
                    {id:"5DBView", template:"33333 ", container: "MainContainer"}
                ]
            }



        ]},//main
        { template:"row 3", minHeight:50}//footer
    ]
});//-ui

});//-ready