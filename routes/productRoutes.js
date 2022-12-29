import express from 'express';

const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  deleteReview,
  getTopProducts,
  getStockCount,
  getproductCount,
  getTotalExpenses,
  getTotal,
 
} from '../controllers/productController.js';
// router.get('/',getProducts);
router.route('/').get(getProducts).post(createProduct);

// router.get('/:id', getProductById);
router.route('/:id/reviews').post(createProductReview);
router.route('/delreview/:id/:reviewid').delete(deleteReview);
router.get('/top', getTopProducts);
router.get('/stock',getStockCount);
router.get('/count',getproductCount)
router.get('/expenses',getTotalExpenses)
router.get('/total',getTotal)
router
  .route('/:id')
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);


export default router;
