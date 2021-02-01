const fileImports = [
    'engine/canvas',
    'engine/handler',
    'engine/gameObject',
    'engine/keyInput',
    'engine/mouseInput',
    'engine/position',
    'engine/velocity',
    'engine/dimension',
    'engine/rectangle',
    'engine/sprite',
    'engine/engine',
    'render/pixel',
    'render/color',
    'render/render',
    'game/ID',
    'game/player',
    'game/world',
    'game/game'
];
for (let i = 0; i < fileImports.length - 1; i++) {
    let script = document.createElement('script');
    script.src = './' + fileImports[i] + '.js';
    script.type = 'application/javascript';
    document.body.append(script);
}
setTimeout(() => {
    let script = document.createElement('script');
    script.src = './' + fileImports[fileImports.length - 1] + '.js';
    script.type = 'application/javascript';
    document.body.append(script);
}, 10);
//# sourceMappingURL=_init.js.map