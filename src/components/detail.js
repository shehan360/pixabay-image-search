import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "./navbar"
import { GetImageByIdAPI } from "./services";

export const DetailPage = () => {
    const [imageObj, setImageObj] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        GetImageByIdAPI(id)
            .then(res => {
                console.log(res)
                var img = {}
                img["imageURL"] = res.data.hits[0].largeImageURL
                img["tags"] = res.data.hits[0].tags
                img["user"] = res.data.hits[0].user
                setImageObj(img)
            })
    })

    return (
        <>
            <NavBar />
            <Box>
                <Container maxWidth='md'>
                    {imageObj &&
                        <>
                            <Box component="img" src={`${imageObj.imageURL}`} alt="loading" 
                                maxWidth={'100%'} pt={4} pb={3}/>
                            <Typography>Image by {imageObj.user}</Typography>
                            <Typography>Tags: {imageObj.tags}</Typography>
                            <br />
                            <br />
                            <br />
                        </>
                    }
                </Container>
            </Box>
        </>
    )
}
