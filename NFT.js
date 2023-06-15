// create a variable to hold your NFT's
let nfts = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, image, description) {
  const nft = {
    name,
    image,
    description,
  };
  nfts.push(nft);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for (const nft of nfts) {
    console.log("Name: " + nft.name);
    console.log("Image: " + nft.image);
    console.log("Description: " + nft.description);
  }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total supply: " + nfts.length);
}
// call your functions below this line
mintNFT("My first NFT", "https://i.imgur.com/123456.jpg", "This is my first NFT");
mintNFT("My second NFT", "https://i.imgur.com/654321.jpg", "This is my second NFT");
listNFTs();
getTotalSupply();
