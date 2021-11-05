import { createGlobalStyle } from "styled-components"
import { device } from "./mediaQueries"

const GlobalStyles = createGlobalStyle`
	html {
		box-sizing: border-box;
		height: 100%;
		overflow: auto;
		width: 100%;
	}

	body {
		background-color: ${props => props.theme.palette.bgColor};
		color: ${props => props.theme.palette.textColor};
		font-family: ${props => props.theme.font};
		font-size: 16px;
		font-weight: ${props => props.theme.vars.fontRegular};
		overflow: hidden;
		min-height: 100vh;
		width: 100%;
		margin: 0;
		&.is-home-cover-animation-active {
			background-color: ${props => props.theme.vars.black};
			background-image: none;
			height: 100vh; 
			main {
				opacity: 0;
			}
		}
		&.is-home-cover-animate {
			main {
				opacity: 1;
			}
		}
	}

	p, h1, h2, h3, h4, h5, h6 {
		margin: 0;
	}

	ul {
		margin: 0;
		padding: 0;
		li {
			list-style: none;
		}
	}

	.u-overflow-hidden {
		overflow: hidden;	
		overscroll-behavior-x: none;
	}
	
	.u-overflow-hidden-ios {
		height: 100%;
		overscroll-behavior-x: none;
		position: fixed;
	}

	.u-nowrap-line {
		white-space: nowrap;
	}

	.u-yellow-color {
		color: ${props => props.theme.vars.goldenrod};
	}

	.no-smooth-scroll {
		scroll-behavior: auto !important;
	}

	.superscript {
		font-size: 0.5em;
		line-height:1em;
		position: relative;
    top: -0.6em;
	}

	.subscript {
		font-size: 0.5em;
		line-height:1em;
		position: relative;
    top: 0em;
	}

	.genericpage {
		margin-bottom: 145px;
	}
	.wrapper {
		min-height: calc(100vh - 195px);
	}

	@media ${device.sm} {
		.genericpage {
			margin-bottom: 165px;
		}
		.wrapper {
			min-height: calc(100vh - 145px);
		}
	}

	@media ${device.md} {
		.genericpage {
			margin-bottom: 135px;
		}
		.wrapper {
			min-height: calc(100vh - 80px);
		}
	}

	@media ${device.lg} {
		.genericpage {
			margin-bottom: 120px;
		}
	}

	@media ${device.xl} {
		.genericpage {
			margin-bottom: 150px;
		}
		.wrapper {
			min-height: calc(100vh - 111px);
		}
	}
`

export default GlobalStyles
