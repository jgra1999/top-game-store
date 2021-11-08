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
				'18': '4.5rem',
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
				'114': '48rem',
				header: '52rem',
				grande: '74rem',
			},
			colors: {
				hades: '#620101',
				lite: '#d5d5d5',
				cosmic: '#c6144f',
				gris: '#181818',
			},

			backgroundImage: {
				horizon: "url('/img/games/ps5/horizon forbidden west fondo.jpg')",
				demons: "url('/img/games/ps5/demons-souls-fondo.jpg')",
				ashes: "url('/img/games/ps4/house of ashes fondo.jpg')",
				black4blood: "url('/img/games/ps4/black 4 blood fondo.jpg')",
				mh: "url('/img/games/switch/mh wallpaper.jpg')",
				little: "url('/img/games/switch/little nightmares II wallpaper.jpg')",
				ghost: "url('/img/hardware/ps5/ghost of tushima wallpaper.jpeg')",
				dualsense: "url('/img/accesorios/controles/dualsense wallpaper.jpg')",
				dualshock: "url('/img/accesorios/controles/dualshock 4 wallpaper.jpg')",
				joycons: "url('/img/accesorios/joycons/switch wallpaper.jpg')",
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
