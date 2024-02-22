const ElonsUpload = async ({files}) => {
    console.log(files);
    const filenames = files.map(file => file.filename);
    return { files:filenames }; 
}

module.exports = ElonsUpload;
