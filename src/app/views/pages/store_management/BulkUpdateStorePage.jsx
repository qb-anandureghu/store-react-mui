import { Autocomplete, Button, Divider, Grid, Icon, IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { H3, Span } from "app/components/Typography";
import { bulkUpdateSearchConditions } from "app/utils/constants";
import { getFilteredStores } from "app/utils/helper";
import { Card, Container, FlexBox, HR } from "app/utils/styled/styled";
import { useRef, useState } from "react";
import { ReactTabulator } from "react-tabulator";

const BulkUpdateStorePage = () => {
  const [searchConditionOpions, setSearchConditionOpions] = useState(bulkUpdateSearchConditions);
  const [addedConditions, setAddedConditions] = useState({});
  const [selectedCondition, setSelectedCondition] = useState(searchConditionOpions[0].name);
  const [columns, setColumns] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  const [previewTable, setPreviewTable] = useState(false);
  let table = useRef();

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

  const searchStore = () => {
    const newColumns = [
      {
        title: "International Store Id",
        field: "international_id",
      },
      {
        title: "Store Name",
        field: "store_name",
      },
    ];
    Object.keys(addedConditions).forEach((condition) => {
      if (condition !== "store_name") newColumns.push({ title: condition, field: condition });
    });
    setColumns(newColumns);
    setFilteredStores(getFilteredStores(addedConditions));
    setPreviewTable(true);
  };

  return (
    <div>
      <Container>
        <Card>
          <section className="add-search-condition">
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
          </section>

          <section className="change-search-conditions">
            {searchConditionOpions.map((condition) => {
              if (condition.isShown) {
                return (
                  <Grid container spacing={3} alignItems="center" my={0.001}>
                    <Grid item minWidth="250px">
                      <Span>{condition.name}</Span>
                    </Grid>
                    <Grid item>
                      <FlexBox gap={2}>
                        <TextField
                          name={condition.name}
                          onChange={handleSearchCondition}
                          placeholder={condition.name}
                        />
                        <Button color="error">
                          <Icon sx={{ color: "#717C90", "&:hover": { color: "#505C75" } }}>remove_circle</Icon>
                        </Button>
                      </FlexBox>
                    </Grid>
                  </Grid>
                );
              }
            })}

            <Button variant="contained" size="large" onClick={searchStore} sx={{ mt: 3 }}>
              Step 1: Search
            </Button>
          </section>

          <HR />

          <section className="replace-values-and-preview">
            {previewTable && (
              <ReactTabulator
                data={filteredStores}
                columns={columns}
                layout={"fitData"}
                onRef={(r) => (table = r)}
                options={{
                  height: filteredStores.length >= 15 ? 500 : "auto",
                  movableRows: true,
                  movableColumns: true,
                  progressiveLoad: "scroll",
                  progressiveLoadDelay: 200,
                  progressiveLoadScrollMargin: 30,
                  paginationSize: 5,
                  renderHorizontal: "virtual",
                  width: "auto"
                }}
              />
            )}
          </section>
        </Card>
      </Container>
    </div>
  );
};

export default BulkUpdateStorePage;
