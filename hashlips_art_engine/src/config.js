const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "Martians World";
const description = "Ticket Into The Martians World";
const baseUri = "https://arweave.net/";

const solanaMetadata = {
  symbol: "MW",
  seller_fee_basis_points: 750,
  external_url: "https://martians.world/nft-collection-1/",
  creators: [
    {
      address: "9fWS7ssdLVHnuRTPZCv4gps9Mb26YEtLMaG6zJTFJ7XX",
      share: 34,
    }, {
      address: "3K4cHT9po7GE5oKYo7EjghvAaaiiVk5bdY1YMegeKp5p",
      share: 33,
    },
    {
      address: "6hfWKULjrgCX4qn3dvywaCp1aVbNHptzEASSdNLJbJnh",
      share: 33,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 1744,
    layersOrder: [
      { name: "Background" },
      { name: "Body Type" },
      { name: "Eyes" },
      { name: "Hats" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 1821,
    layersOrder: [
      { name: "Background" },
      { name: "Body Type" },
      { name: "Eyes" },
    ],
  },
  {
    growEditionSizeTo: 3567,
    layersOrder: [
      { name: "Background" },
      { name: "Body Type" },
      { name: "Eyes" },
      { name: "Clothing" },
    ],
  },
  {
    growEditionSizeTo: 5313,
    layersOrder: [
      { name: "Background" },
      { name: "Body Type" },
      { name: "Eyes" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 7076,
    layersOrder: [
      { name: "Background" },
      { name: "Body Type" },
      { name: "Eyes" },
      { name: "Clothing" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 7776,
    layersOrder: [
      { name: "Background" },
      { name: "Body Type" },
      { name: "Eyes" },
      { name: "Clothing" },
      { name: "Hats" },
      { name: "Accessories" },
    ],
  },

];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
