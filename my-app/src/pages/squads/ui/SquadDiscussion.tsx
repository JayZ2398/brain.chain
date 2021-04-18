import Card from "@material-ui/core/Card"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography";

export default function Squad() {
  return (
    <Card>
      <Avatar
        alt="Jasmine"
        src="https://images.unsplash.com/photo-1542297919088-a2b78b2c578b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
      />
      <Typography variant="h4">
        Sarah
      </Typography>
      <Typography variant="h6">
        26m ago
      </Typography>
      <Typography variant="body1">
        What are the photosynthesis cells for?
      </Typography>
    </Card>
  );
}