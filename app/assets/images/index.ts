import Infrastructure from "./infra.webp?w=320;480;768;1024;1440&as=picture";
import Solarpunk from "./solarpunk.webp?w=320;480;768;1024;1440&as=picture";
import SolarGhibhify from "./solarbg-ghiblify.webp?w=320;480;768;1024;1440&as=picture";
import ETHCity from "./ethcity.webp?w=320;480;768;1024;1440&as=picture";
import Avatar from "./avatar.webp?w=320;480;768;1024;1440&as=picture";
import Island from "./island.webp?w=320;480;768;1024;1440&as=picture";
import AnimeBg from "./animebg.webp?w=320;480;768;1024;1440&as=picture";
import Maxwell from "./maxwell.webp?w=320;480;768;1024;1440&as=picture";
import SolarRow from "./solar-row.webp?w=320;480;768;1024;1440&as=picture";

export {
	Infrastructure,
	SolarGhibhify,
	Solarpunk,
	Avatar,
	ETHCity,
	Island,
	AnimeBg,
	Maxwell,
	SolarRow,
};

export type CustomImage = {
	sources: {
		[key: string]: string; // e.g. { webp: "...srcset..." }
	};
	img: {
		src: string;
		w: number;
		h: number;
	};
};
