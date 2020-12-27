/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		// Contributed by Jeremy Bowyer
	
		var keywords =  'for if in else elseif ';

		var funcs = 'abs as.Date as.data.frame as.list by sum str paste0 merge ' +
					'as.numeric as.character loadWorkbook read.csv unlist data.frame ' +
					' readWorkbook options setwd replace grep gsub ';

		var special =  'none';

		this.regexList = [
				{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments, 		css: 'comments' },
				{ regex: /^\s*@\w+/gm, 							css: 'decorator' },
				{ regex: /\&lt;\-/gm, 							css: 'arrow' },
				{ regex: /,/gm, 							css: 'comma' },
				{ regex: /FALSE|TRUE/gm, 						css: 'bool' },
				{ regex: /\$/gm, 							css: 'dollar' },
				{ regex: /NaN|NA|NULL/gm, 						css: 'missing' },
				{ regex: /(['\"]{3})([^\1])*?\1/gm, 					css: 'comments' },
				{ regex: /"(?!")(?:\.|\\\"|[^\""\n])*"/gm, 				css: 'string' },
				{ regex: /'(?!')(?:\.|(\\\')|[^\''\n])*'/gm, 				css: 'string' },
				{ regex: /\+|\ - |\*|\/|\%|=|==|\||\&amp;|\&gt;|\&lt;/gm, 		css: 'operator' },
				{ regex: /\b\d+\.?\w*/g, 						css: 'value' },
				{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),			css: 'functions' },
				{ regex: new RegExp(this.getKeywords(keywords), 'gm'), 			css: 'keyword' },
				{ regex: new RegExp(this.getKeywords(special), 'gm'), 			css: 'color1' }
				];
			
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['r', 'rprogramming'];

	SyntaxHighlighter.brushes.r = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
