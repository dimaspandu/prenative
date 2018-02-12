/* =============================================================================================================================
SCRIPT: PreNative
AUTHOR: Dimas Pratama
============================================================================================================================= */

"use strict";

var App = function (){
    this.InstallLayout = function (Tag){
        var Tag = document.getElementsByTagName(Tag);
        var Render = "";

        for(var T = 0; T<Tag.length; T++){
            var Component = document.getElementsByTagName("Component");

            if(Component !== null){
                for(var C = 0; C<Component.length; C++){
                    Component[C].innerHTML = document.getElementById(Component[C].getAttribute("id")).outerHTML;
                }
            }

            Render += Tag[T].outerHTML;
        }

        return Render;
    };

    this.SetView = function (View){
        return document.body.innerHTML = View;
    };

    this.FindById = function (ID){
        return document.getElementById(ID);
    };

    this.OnCreate = function (){
        this.setView("");
    };
};

var Export = function (Class){
    var Ssalc = new Class();

    return Ssalc.OnCreate();
};