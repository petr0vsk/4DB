/**
 * Created by avpetro1 on 14.07.2015.
 */

//----------------------------------------
var toolbar = {
    view:"toolbar", paddingY:0, elements:[
        {view:"tabbar", id:'tabbar', value: 'MainView', multiview:true, options: [
            { value: 'Главная', id: 'MainView'},
            { value: 'Ежнедельный отчет, ф. 4-ДБ', id: '4DBView'},
            { value: 'Ежемесячный отчет, ф. 5-ДБ', id: '5DBView'}]
        }
    ]
};
//---------------------------------------
var  MainPage = {
    id:"MainView",
    container: "MainContainer",
    view: "template",
    template: "Главная страница"
};
//-----------------------------------------
var  tab4_DB = {
    id:"4DBView",
    container: "MainContainer",
    type:"line",
    editable:true,
    editor:"text",
    rows: [
        {template:"Форма 4-ДБ", height: 35},
        {template:"Сведения об основных событиях, характеризующих состояние безопасности за прошедшую неделю с ... по ... 2015 г.", height: 35},
        {template:"Название подразделения", height: 35},
        {template:"Основные показатели", height: 35},
        {cols: [
            {
                template:"1", width: 50
            },
            {
                template:"Наиболее значимая информация об обстановке в зоне ответственности ДЗ и вокруг его объектов (информация, необходимая для доклада исполнительному вице-президенту-руководителю Департамента по безопасности и ИТ ОАО АФК \"Система\" в соответсвии с п.1.13. формы 1-ДБ):"}

        ], height: 95},
        {view:"resizer"},
        {cols: [
            {
                template:"1.1", width: 50
            },
            {
                template:" "
            }
        ], height: 35},
        {view:"resizer"},
        {cols: [
            {
                template:"1.2", width: 50
            },
            {
                template:" ", editor:"text"
            }
        ], height: 35},
        {view:"resizer"}


    ]//-rows tab4-DB

}; //-tab_4DB
//-----------------------------------
var  tab5_DB = {
    id:"5DBView",
    container: "MainContainer",
    view: "template",
    template: "5-ДБ"
};
//----------------------------------------
// при изменении размеров окна - подгоним под него размеры базового слоя
webix.event(window, "resize", function(){
    layout.adjust();
});

//===================== main ===========================
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
                    MainPage,
                    tab4_DB,
                    tab5_DB
                ]
            }



        ]},//main
        { template:"row 3", minHeight:50}//footer
    ]
});//-ui

});//-ready