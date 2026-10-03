import mockData from "../data/mockData.js";

const getProducts = (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    return res.status(200).json({
      success: true,
      data: mockData,
    });
  }

  const product = mockData.find((item) => item.id === Number(id));

  return res.status(product ? 200 : 404).json({
    success: Boolean(product),
    data: product ?? null,
  });
};

export { getProducts };
