import asyncHandler from "express-async-handler";

import {prisma} from "../prisma.js";

export const getCars= asyncHandler(async (req, res) => {
  const car = await prisma.car.findMany({
    
  })
  res.json(car)
})

export const getCar= asyncHandler(async (req, res) => {
  const car = await prisma.car.findUnique({
  where: {id: +req.params.id},
    include: {
      info: true
    }
  })
  res.json(car)
})

export const addCar = asyncHandler(async (req, res) => {
    const {
      name,
      price,
      image,
      model,
      transmission,
      engine,
      power,
      year,
      infoText
    } = req.body;
    console.log (req.body);
  
    try {
      // Сначала создаем машину (Car)
      const car = await prisma.car.create({
        data: {
          name: name,
          price: price,
          image: image,
          info: {
            create: {
              model: model,
              transmission: transmission,
              engine: engine,
              power: power,
              year: year,
              infoText: infoText,
            },
          },
        },
        include: {
          info: true, // Это добавит информацию о машине в возвращаемый объект
        },
      });
      console.log(car);
  
      res.status(201).json({
        message: 'Машина успешно добавлена',
        car,
      });
    } catch (error) {
      res.status(500).json({
        message: 'Ошибка при добавлении машины',
        error: error.message,
      });
    }
  });