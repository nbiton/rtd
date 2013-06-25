module.exports = {
    DEBUG: false,
    startupTasks: [
        'bgShell:killAll',
        'downloadAndOrStartSelenium',
        'bgShell:synchronizeMirrorApp',
        'bgShell:instrumentCode',
        'bgShell:startMirrorApp',
        'bgShell:startKarma',
        'bgShell:startApp',
        'outputPorts',
        'watch'
    ],
    watchTasks: [
        'bgShell:karmaRun',
        'bgShell:synchronizeMirrorApp',
        'bgShell:instrumentCode',
        'bgShell:runTests',
        'postLatestUnitCoverage',
        'bgShell:killReports',
        'bgShell:runCoverageCheck'
    ]
};