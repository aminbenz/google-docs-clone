import { useState, useEffect } from 'react';
const useEditorStyles = () => {
  // let pagePadding = '-8px',
  //   pageFontSize = '16px',
  //   pageFont = 'arial';
  // paperSize = 'A4';

  const paperWidth = '8.27in';
  const paperHeight = '11.69in';
  const [paperSize, setPaperSize] = useState('A4');
  const [lineMargin, setLineMargin] = useState('0.7');
  const [scale, setScale] = useState('1');
  const [fontSize, setFontSize] = useState('12pt');
  const [lineHeight, setLineHeight] = useState('1.6');
  const [fontFamily, setfontFamily] = useState(
    `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif`
  );

  const [pageOffset, setPageOffset] = useState({
    inset: 0.5,
    top: 0.5,
    right: 1,
    bottom: 0.5,
    left: 1,
  });

  const [useCssEditorStyles, setUseCssEditorStyles] = useState(
    `p{ margin:${lineMargin}rem 0;}  body {   line-height :${lineHeight} ;   font-size: ${fontSize}; max-width :${paperWidth} ;  max-height : ${paperHeight}; margin : ${pageOffset.top}in ${pageOffset.right}in ${pageOffset.bottom}in ${pageOffset.left}in; transform: scale(${scale}); overflow: hidden;}`
  );

  const useEditorStyles = {
    fontSize: fontSize,
    maxWidth: paperWidth,
    maxHeight: paperHeight,
    // margin: pageMargin.inset + 'in',
    // marginTop: pageMargin.top + 'in',
    // marginLeft: pageMargin.left + 'in',
    // marginRight: pageMargin.right + 'in',
    // marginBottom: pageMargin.bottom + 'in',
  };

  useEffect(() => {
    setUseCssEditorStyles(
      `p{ margin:${lineMargin}rem 0;}  body {   line-height :${lineHeight} ;   font-size: ${fontSize}; max-width :${paperWidth} ;  max-height : ${paperHeight}; margin : ${pageOffset.top}in ${pageOffset.right}in ${pageOffset.bottom}in ${pageOffset.left}in; transform: scale(${scale}); overflow: hidden;}`
    );
  }, [lineMargin, pageOffset, lineHeight]);

  return {
    useCssEditorStyles,
    setPageOffset,
    setPaperSize,
    setScale,
    setFontSize,
    setfontFamily,
    setLineMargin,
  };
};

export default useEditorStyles;
