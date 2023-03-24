import { Box } from '@mui/material'
import React from 'react'

export default function IconButtonComponent(icon, buttonType) {
    return (
        icon &&
        <Box
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#E1474A", borderRadius: "30px",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                color: "#FFFFFF"
            }}>
            {icon}
        </Box>
    )
}
