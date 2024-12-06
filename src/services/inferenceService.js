const tf = require('@tensorflow/tfjs-node');
const InputValidationError = require('../exceptions/InputValidationError');

async function runPrediction(model, image) {
    try {
        const imageTensor = tf.node
            .decodeJpeg(image)
            .resizeNearestNeighbor([224, 224])
            .expandDims()
            .toFloat();

        const predictions = model.predict(imageTensor);
        const scores = await predictions.data();
        const maxScore = Math.max(...scores) * 100;

        const result = maxScore > 50 ? 'Cancer' : 'Non-cancer';
        const recommendation = result === 'Cancer' 
            ? 'Segera periksa ke dokter!' 
            : 'Penyakit kanker tidak terdeteksi.';

        return { result, recommendation };
    } catch (error) {
        throw new InputValidationError('Terjadi kesalahan dalam melakukan prediksi');
    }
}

module.exports = runPrediction;