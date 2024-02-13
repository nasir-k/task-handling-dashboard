import { Box, Typography } from "@mui/material";

const TileItem = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => {
  return (
    <Box>
      <Typography variant="caption" sx={{ color: "grey" }}>
        {title}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        {content}
      </Typography>
    </Box>
  );
};

export default TileItem;
