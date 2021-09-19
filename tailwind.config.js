module.exports = {
	purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		minHeight: {
			'0': '0',
			'80': '20rem',
			'110': '40rem',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			full: '100%',
		},

		minWidth: {
			'0': '0',
			'1/4': '25%',
			'2/6': '33.333333%',
			'1/2': '50%',
			'3/4': '75%',
			full: '100%',
		},

		extend: {
			spacing: {
				'52.5': '13.5rem',
				'66': '18rem',
				'94': '22rem',
				'96.5': '24.5rem',
				'100': '28rem',
				'102': '30rem',
				'104': '32rem',
				'108': '36.30rem',
				'110': '40rem',
				'112': '44rem',
				header: '52rem',
			},
			colors: {
				hades: '#620101',
			},

			backgroundImage: {
				horizon: "url('/img/ps5/horizon forbidden west fondo.jpg')",
				demons: "url('/img/ps5/demons-souls-fondo.jpg')",
			},
		},
		boxShadow: {
			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',

			'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.7)',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			none: 'none',
		},
		container: {
			center: true,
		},
	},
	variants: {
		extend: {
			ringWidth: ['hover', 'active'],
			ringOffsetWidth: ['hover', 'active'],
			height: ['hover', 'focus'],
			width: ['hover', 'focus'],
			borderWidth: ['hover', 'focus'],
			backgroundColor: ['active'],
			textColor: ['active'],
		},
	},
	plugins: [],
};
