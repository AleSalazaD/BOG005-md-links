const dataSample = {
    pathFile: 'D:\\Programacion\\LABORATORIA\\BOG005-md-links\\fileTest\\insideDirectory\\insideInsideDirectory',
    validateFalse: [ {
        href: 'https://www.youtubecom/',
        text: 'YouTube,',
        file: 'D:\\Programacion\\LABORATORIA\\BOG005-md-links\\fileTest\\markdown.md',
        status: 'Server error',
        ok: 'Fail'
      },
    ],
    validateTrue: [
        {
          href: 'https://www.freecodecamp.org/espanol/news/como-entender-recursividad-en-javascript/',
          text: 'recursividad,',
          file: 'D:\\Programacion\\LABORATORIA\\BOG005-md-links\\fileTest\\insideDirectory\\insideInsideDirectory\\deepMarkdown.md',
          status: 200,
          result: 'Ok!'
        }
      ],
}

module.exports = { dataSample, 
};
