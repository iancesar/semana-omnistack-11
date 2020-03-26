const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const { id } = req.body;

        console.log(req.body);
        

        const ong_name = await connection('ongs').where('id', id).select('name').first();

        if (!ong_name) {
            return res.status(400).json({ error: 'No ONG foud with this ID' });
        }

        return res.json(ong_name);

    }
}