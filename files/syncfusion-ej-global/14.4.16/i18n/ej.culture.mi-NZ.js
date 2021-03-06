ej.addCulture( "mi-NZ", {
	name: "mi-NZ",
	englishName: "Maori (New Zealand)",
	nativeName: "Reo Māori (Aotearoa)",
	language: "mi",
	numberFormat: {
		percent: {
			pattern: ["-%n","%n"]
		},
		currency: {
			pattern: ["-$n","$n"]
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Rātapu","Rāhina","Rātū","Rāapa","Rāpare","Rāmere","Rāhoroi"],
				namesAbbr: ["Ta","Hi","Tū","Apa","Pa","Me","Ho"],
				namesShort: ["Ta","Hi","Tū","Aa","Pa","Me","Ho"]
			},
			months: {
				names: ["Kohitātea","Huitanguru","Poutūterangi","Paengawhāwhā","Haratua","Pipiri","Hōngongoi","Hereturikōkā","Mahuru","Whiringa ā-nuku","Whiringa ā-rangi","Hakihea",""],
				namesAbbr: ["Kohi","Hui","Pou","Pae","Hara","Pipi","Hōngo","Here","Mahu","Nuku","Rangi","Haki",""]
			},
			AM: ["a.m.","a.m.","A.M."],
			PM: ["p.m.","p.m.","P.M."],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, dd MMMM, yyyy",
				f: "dddd, dd MMMM, yyyy h:mm tt",
				F: "dddd, dd MMMM, yyyy h:mm:ss tt",
				M: "d MMMM",
				Y: "MMMM, yy"
			}
		}
	}
});