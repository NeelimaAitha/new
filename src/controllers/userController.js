const express = require('express');
const prisma = require('../db');
const pdfService = require('../services/pdfService');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, emailAddress } = req.body;

    // Validation logic here

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
      },
    });

    const pdfPath = await pdfService.generatePdf(user);

    res.status(201).json({ message: 'User created successfully', pdfPath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
