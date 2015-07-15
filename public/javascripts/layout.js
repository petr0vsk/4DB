/**
 * Created by avpetro1 on 14.07.2015.
 */

var menu_data = [
    { id:"1",value:"Translate...", submenu:[
        "English",
        { value:"Slavic...", submenu:[
            "Belarus", "Russian", "Ukranian"
        ]},
        "German"
    ]},
    { id:"2",value:"Post...", submenu:[ "Facebook", "Google+", "Twitter" ]},
    { id:"3",value:"Info" }
];
var menu = {
    view:"menu",
    data: menu_data,
    css:"blue"
};
var toolbar = {
    view:"toolbar", paddingY:0,  elements:[
        {},
        { view:"text" },
        { view:"button", label:"Search", width:100 }
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
        { type:"clean", cols:[ menu, toolbar ] }, //header
        { cols:[
            { template:"col 1", minHeight:150,width: 150},
            { template:"col 2", minHeight:600}

        ]},//main
        { template:"row 3", minHeight:50}//footer
    ]
});//-ui

});//-ready