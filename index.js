import './index.css';

window.addEventListener('load', () => {

    var newEl = document.createElement('div');
    newEl.id = "mini-alert-confirm";
    newEl.innerHTML = (`
<div class="box">
    <div class="ico"></div>
    <div class="text"></div>
    <div class="buttons-container">
        <div class="button">Ok</div>
    </div>
    <div class="buttons-container buttons-container--confirm">
        <div class="button button--ok">Ok</div>
        <div class="button button--v2">Cancel</div>
    </div>
</div>
`);
    document.querySelector("body").appendChild(newEl);

});

const close = function () {
    document.querySelector("html").classList.remove("show-mini-alert-confirm");
    setTimeout(function () {
        document.querySelector("html").classList.remove("show-mini-alert-confirm--confirm");
    }, 500);
}

const miniAlertConfirm = function (text, callback) {

    document.querySelector("html").classList.add("show-mini-alert-confirm");
    document.querySelector("#mini-alert-confirm .text").innerHTML = text;

    document.querySelector("#mini-alert-confirm .button").removeEventListener("click", close);
    document.querySelector("#mini-alert-confirm .button").addEventListener("click", close);

    if (callback) {
        const confirmBind = function () { callback(); close(); }
        document.querySelector("html").classList.add("show-mini-alert-confirm--confirm");
        document.querySelector("#mini-alert-confirm .button--ok").removeEventListener("click", confirmBind);
        document.querySelector("#mini-alert-confirm .button--ok").addEventListener("click", confirmBind);
    }

}

export default miniAlertConfirm;

/*

import miniAlertConfirm from 'miniAlertConfirm';

alert = function (text) { miniAlertConfirm(text); }
confirm = function (text, callback) { miniAlertConfirm(text, callback); }

*/