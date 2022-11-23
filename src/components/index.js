import { IconButton, TextField } from "@mui/material"
import { Box, Container, Stack } from "@mui/system"
import { NavBar } from "./navbar"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { GetImagesAPI } from "./services";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from "react-router-dom";

export const IndexPage = () => {
    const [images, setImages] = useState([])
    const [searchQuery, setSearchQuery] = useState("");

    const searchForImages = () => {
        GetImagesAPI(searchQuery)
            .then(res => {
                console.log(res)
                var newImgs = []
                res.data.hits.forEach(element => {
                    newImgs.push({ id: element.id, img: element.previewURL })
                });
                setImages(newImgs)
            })
    }

    useEffect(() => {
        GetImagesAPI("")
            .then(res => {
                console.log(res)
                var newImgs = []
                res.data.hits.forEach(element => {
                    newImgs.push({ id: element.id, img: element.previewURL })
                });
                setImages(newImgs)
            })
    }, [])

    return (
        <>
            <NavBar />
            <Box>
                <Container maxWidth='md'>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        mt={4}
                        mb={2}
                    >
                        <TextField
                            value={searchQuery}
                            label="Search images..."
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                            }}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    searchForImages()
                                }
                            }}
                            fullWidth
                        />
                        <IconButton onClick={searchForImages}>
                            <SearchIcon style={{ fill: "blue" }} />
                        </IconButton>
                    </Stack>
                    <ImageList variant="masonry" cols={5} rowHeight={164}>
                        {images.map((item) => (
                            <ImageListItem key={item.id}>
                                <Link to={`/image/${item.id}`}>
                                    <img
                                        src={`${item.img}`}
                                        srcSet={`${item.img}`}
                                        loading="lazy"
                                        alt='loading..'
                                    />
                                </Link>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Container>
            </Box>
        </>
    )
}
