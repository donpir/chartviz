/*
 ** This file is part of ChartViz Library.
 **
 ** ChartViz Library is free software: you can redistribute it and/or modify
 ** it under the terms of the GNU General Public License as published by
 ** the Free Software Foundation, either version 3 of the License, or
 ** (at your option) any later version.
 **
 ** ChartViz Library is distributed in the hope that it will be useful,
 ** but WITHOUT ANY WARRANTY; without even the implied warranty of
 ** MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 ** GNU General Public License for more details.
 **
 ** You should have received a copy of the GNU General Public License
 ** along with ChartViz Library. If not, see <http://www.gnu.org/licenses/>.
 **
 ** Copyright (C) 2016 ChartViz Library - Donato Pirozzi (donatopirozzi@gmail.com)
 ** Distributed under the GNU GPL v3. For full terms see the file LICENSE.
 ** License: http://www.gnu.org/licenses/gpl.html GPL version 3 or higher
 **/

function VizRecommender() {

}//Constructor.

VizRecommender.VIZS = {
    NOVIZ               :   { value: -1, name: "NOVIZ", label: "Nothing to visualize" },

    MAP                 :   { value: 1, name: "MAP", label: "map" },
    PIE_CHART           :   { value: 2, name: "PIE_CHART", label: "Pie-chart"},

    LINE_CHART          :   { value: 3, name: "LINE_CHART", label: "Line-chart" },
    LINE_AREA_CHART     :   { value: 4, name: "LINE_AREA_CHART", label: "Area-chart" },

    SPLINE_CHART        :   { value: 4, name: "SPLINE_CHART", label: "Spline-chart" },
    SPLINE_AREA_CHART   :   { value: 6, name: "SPLINE_AREA_CHART", label: "Area-Spline-Chart" },

    STACKED_AREA_CHART  :   { value: 7, name: "STACKED_AREA_CHART", label: "Stacked Area Chart" },

    BAR_CHART           :   { value: 8, name: "BAR_CHART", label: "Bar Chart" },

    STEP_CHART          :   { value: 9, name: "STEP_CHART", label: "Step Chart" },
    STEP_AREA_CHART     :   { value: 10, name: "STEP_AREA_CHART", label: "Step Area Chart"},

    SCATTER_CHART       :   { value: 11, name: "SCATTER_CHART", label: "Scatter Chart" }
};

/**
 *
 * @param selectedFields Array of { fieldName, type, subtype }
 */
VizRecommender.suggest = function ( selectedFields ) {
    var response = { success: true, viz: null, errMsg: "" }

    //Check input: must be an array.
    if (Array.isArray(selectedFields) == false) {
        response.errMsg = "ArgumentException: selectedFields must be an array.";
        response.success = false;
        return response;
    }

    //Check input: must have at least one item.
    if (selectedFields.length == 0) {
        response.viz = VizRecommender.VIZS.NOVIZ;
        response.errMsg = "No data to visualise.";
        response.success = true;
        return response;
    }

    //ONE field selected.
    if (selectedFields.length == 1) {
        var selectedField = selectedFields[0];
        if (selectedField.type === DataTypeConverter.TYPES.NUMBER.name) {
            response.viz = VizRecommender.VIZS.LINE_CHART;
            return response;
        } else {
            response.errMsg = "ArgumentException: selectedFields must be an array.";
            response.success = false;
            return response;
        }
    }

    response.errMsg = "Cannot Find a suitable visualisation for the selected data.";
    response.success = false;
    return response;

};//EndFunction.

VizRecommender.equivalent = function (selectedFields, preSelectedVizType) {
    var response = { success: true, viz: [], errMsg: "" }

    //Check input: must be an array.
    if (Array.isArray(selectedFields) == false) {
        response.errMsg = "ArgumentException: selectedFields must be an array.";
        response.success = false;
        return response;
    }

    //Check input: must have at least one item.
    if (selectedFields.length == 0) {
        response.viz = VizRecommender.VIZS.NOVIZ;
        response.errMsg = "No data to visualise.";
        response.success = true;
        return response;
    }

    //If no starting visualisation has been provided, it simply suggests the first one.
    //if (startingVizType == null || typeof startingVizType == 'undefined')
        //return VizRecommender.suggest(selectedFields);

    //ONE field selected.
    if (selectedFields.length == 1) {
        var selectedField = selectedFields[0];

        //Initialises the array of viz.
        response.viz = [];
        //response.viz.push(startingVizType);

        if (selectedField.type === DataTypeConverter.TYPES.NUMBER.name) {
            response.viz.push(VizRecommender.VIZS.LINE_CHART);
            response.viz.push(VizRecommender.VIZS.SPLINE_CHART);
            response.viz.push(VizRecommender.VIZS.LINE_AREA_CHART);
            response.viz.push(VizRecommender.VIZS.SPLINE_AREA_CHART);
            response.viz.push(VizRecommender.VIZS.BAR_CHART);
            response.viz.push(VizRecommender.VIZS.STEP_CHART);

            return response;
        } else {
            response.errMsg = "ArgumentException: Unknown data type.";
            response.success = false;
            return response;
        }
    }

    response.errMsg = "Cannot Find a suitable visualisation for the selected data.";
    response.success = false;
    return response;
};//EndFunction.
