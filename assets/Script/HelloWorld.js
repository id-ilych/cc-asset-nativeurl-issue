cc.Class({
    extends: cc.Component,

    properties: {
        asset: {
            default: null,
            type: cc.Asset,
        },
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        cc.error(`[HelloWorld][onLoad] asset.nativeUrl=${this.asset.nativeUrl}`)
    },

    // called every frame
    update: function (dt) {

    },
});
