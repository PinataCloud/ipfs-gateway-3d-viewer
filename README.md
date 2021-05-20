## 3D Model Viewer For IPFS Gateways

This is a small app that should be uploaded to IPFS and should be used to load other assets (specifically 3D Models) from IPFS. 

### How to Use

1. `git clone {THIS_REPOSITORY}`
2. `cd 3d-viewer`
3. `npm install`
4. `npm run build`
5. Upload the build folder as a folder upload to Pinata or pin it manually yourself to IPFS.
6. Upload a 3D Model file (in one of these formats: obj, 3ds, stl, ply, gltf, glb, 3dm, off) to Pinata or manually add it to IPFS yourself.
7. View the model in browser by visiting `${YOUR_GATEWAY_URL}/ipfs/${APP_CID}?object=${3D_MODEL_CID}&filename=${MODEL_FILENAME_WITH_EXTENSION}`

*Note: it is important that the `filename` parameter is included with the correct extension or the viewer will not work.*