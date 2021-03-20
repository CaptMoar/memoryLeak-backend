const { getAllMetricas } = require("../repository/metricasRepository");

const TableName = 'ssff-informe'

const getAllMemory =  (req) => {
    return  Promise.all([getAllMetricas()]);
};

module.exports = { getAllMemory }