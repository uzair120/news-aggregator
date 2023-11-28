import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import guardianAPI from "../APIs/GuardianAPI";
import NewsCategories from "../common/enum/NewsCategories";
import Source from "../common/enum/Sources";
import { setSection } from "../store/actions";
import NYCategories from "../common/enum/NYCategories";
import * as styles from "../styles";

const SectionDropdown = () => {
  const dispatch = useDispatch();
  const selectedSection = useSelector((state) => state.section);
  const selectedSource = useSelector((state) => state.source);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        let response;
        if (selectedSource === Source.NewsAPI) {
          const newsApiSections = Object.values(NewsCategories).map(
            (category) => ({
              webTitle: category,
              id: category,
            })
          );
          response = { data: { response: { results: newsApiSections } } };
        } else if (selectedSource === Source.NYAPI) {
          const newsApiSections = Object.values(NYCategories).map(
            (category) => ({
              webTitle: category,
              id: category,
            })
          );
          response = { data: { response: { results: newsApiSections } } };
        } else {
          response = await guardianAPI.get("/sections");
        }
        setSections(response.data.response.results);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, [selectedSource]);

  const handleSelectChange = (e) => {
    const selection = e.target.value;
    if (selectedSection !== selection) {
      dispatch(setSection(selection));
    }
  };

  return (
    <FormControl sx={styles.dropdownStyle}>
      <InputLabel id="section-label">Section:</InputLabel>
      <Select
        labelId="section-label"
        id="section"
        value={selectedSection}
        onChange={handleSelectChange}
        label="Section"
        sx={styles.selectStyleDropdown}
      >
        <MenuItem value="">All</MenuItem>
        {sections.map((section) => (
          <MenuItem key={section.id} value={section.id}>
            {section.webTitle}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SectionDropdown;
