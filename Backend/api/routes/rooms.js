import  express  from "express";
import {createRoom,deleteRoom,updateRoom,getRoom,getRooms} from "../controllers/room.js"
const router =express.Router();
//CREATE
router.post("/",createRoom);
//UPDATE
router.put("/:id",updateRoom )
//DELTE
router.delete("/:id/:hotelid",deleteRoom)
//GET
router.get("/:id", getRoom)
//GET ALL
router.get("/", getRooms);

export default router