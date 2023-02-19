import { Autocomplete, Button, Grid, Icon, IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { H3, Span } from "app/components/Typography";
import { bulkUpdateSearchConditions } from "app/utils/constants";
import { Card, Container, FlexBox } from "app/utils/styled/styled";
import { useState } from "react";

const BulkUpdateStorePage = () => {
  const [searchConditionOpions, setSearchConditionOpions] = useState(bulkUpdateSearchConditions);
  const [addedConditions, setAddedConditions] = useState({});
  const [selectedCondition, setSelectedCondition] = useState(searchConditionOpions[0].name);

  const addSearchCondition = () => {
    setSearchConditionOpions((old) => {
      const newUpdateCondition = old.map((condition) => {
        if (condition.name === selectedCondition) {
          condition.isShown = true;
        }
        return condition;
      });
      return newUpdateCondition;
    });
  };

  const handleSearchCondition = (e) => {
    const key = e.target.name;
    let value = e.target.value;

    console.log(key, value);
    console.log(addedConditions);

    value = value.replaceAll("\t", "").replaceAll(/[\u200B-\u200D\uFEFF]/g, "");

    if (!value) {
      const newSearchConditions = addedConditions;
      delete newSearchConditions[key];
      setAddedConditions(newSearchConditions);
    } else {
      setAddedConditions({
        ...addedConditions,
        [key]: value,
      });
    }
  };

  return (
    <div>
      <Container>
        <Card>
          <H3>Bulk Update</H3>
          <Grid container spacing={3} my={1} alignItems="center">
            <Grid item>
              <Autocomplete
                disablePortal
                id="bulk-update-search-conditions"
                options={searchConditionOpions.map((condition) => condition.name)}
                sx={{ width: 300 }}
                defaultValue={searchConditionOpions[0].name}
                renderInput={(params) => {
                  return <TextField {...params} label="Fields" />;
                }}
                onChange={(e, value) => setSelectedCondition(value)}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="info" onClick={addSearchCondition}>
                Add Search Condition
              </Button>
            </Grid>
          </Grid>

          {searchConditionOpions.map((condition) => {
            if (condition.isShown) {
              return (
                <Grid container spacing={3} alignItems="center" my={0.001}>
                  <Grid item minWidth="250px">
                    <Span>{condition.name}</Span>
                  </Grid>
                  <Grid item>
                    <FlexBox gap={2}>
                      <TextField name={condition.name} onChange={handleSearchCondition} placeholder={condition.name} />
                      <Button color="error">
                        <Icon sx={{ color: "#717C90", "&:hover": { color: "#505C75" } }}>
                          remove_circle
                        </Icon>
                      </Button>
                    </FlexBox>
                  </Grid>
                </Grid>
              );
            }
          })}
        </Card>
      </Container>
    </div>
  );
};

export default BulkUpdateStorePage;
