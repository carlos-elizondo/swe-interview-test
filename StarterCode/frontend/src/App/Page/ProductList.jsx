import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Container } from "@mui/material";
const ProductList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // 1. Define the async function
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5001/api/products",
                );
                const result = await response.json();

                // 2. Save the data to state
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); // 3. Empty array means "run only once on mount"

    //implement the delete function
    const handleDelete = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:5001/api/products/${id}`,
                {
                    method: "DELETE",
                },
            );

            const result = await response.json();

            setData((prevData) =>
                prevData.filter((product) => product.id !== id),
            );
        } catch (error) {
            console.error("Error fetching product to delete:", error);
        }
    };

    return (
        <Container
            maxWidth="lg" // Limits the width on large screens so cards don't spread too far
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap", // 1. KEY FOR RESPONSIVENESS: Moves cards to next line
                justifyContent: "center", // 2. KEY FOR CENTERING: Centers cards horizontally
                alignItems: "flex-start", // Aligns cards to the top of their row
            }}
        >
            {data.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    imageUrl={product.imageUrl}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    onDelete={handleDelete}
                />
            ))}
        </Container>
    );
};

export default ProductList;
