import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Paper, Typography, IconButton } from "@mui/material";
function ProductCard({ id, name, description, price, imageUrl, onDelete }) {
    return (
        <Box data-product-id={id} sx={{ p: 1 }}>
            <Paper
                elevation={3}
                sx={{
                    height: 300,
                    width: 300,
                    borderRadius: 5,
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",

                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            width: 300,
                            height: 150,
                            position: "relative",
                            borderRadius: 2,
                            overflow: "hidden",
                            flex: 6,
                        }}
                    >
                        {/* The Icon Container */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0, // Distance from the top edge
                                left: 0, // Distance from the right edge
                                zIndex: 1, // Ensures it sits "above" the image layer
                                p: 2,
                                display: "flex",
                            }}
                        >
                            <IconButton
                                color="error" // Default color is red
                                onClick={() => onDelete(id)}
                                sx={{
                                    transition: "all 0.2s ease-in-out", // Smooths the color transition
                                    "&:hover": {
                                        color: "white", // 1. Changes the icon to white
                                        backgroundColor:
                                            "rgba(211, 47, 47, 0.7)", // Light red tint
                                        border: "1px solid rgba(255, 255, 255, 0.3)", // 3. Subtle white border
                                    },
                                }}
                            >
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </Box>

                        {/* The Image */}
                        <Box
                            component="img"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                            alt=""
                            src={imageUrl}
                        />
                    </Box>
                    <Box sx={{ flex: 4 }}>
                        <Box
                            sx={{
                                p: 2,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {" "}
                            {/* 1. Name */}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    lineHeight: 1.2,
                                    mb: 0.5,
                                }}
                            >
                                {name}
                            </Typography>
                            {/* 2. PRICE */}
                            <Typography
                                variant="subtitle1"
                                color="primary"
                                sx={{ fontWeight: "700" }}
                            >
                                ${price}
                            </Typography>
                            {/* 3. DESCRIPTION */}
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                }}
                            >
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default ProductCard;
