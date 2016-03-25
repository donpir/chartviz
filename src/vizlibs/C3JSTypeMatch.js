function C3JSTypeMatch() {

}//EndConstructor.

C3JSTypeMatch.typeOf = function (vizRecommenderType) {
    if (vizRecommenderType == VizRecommender.VIZS.LINE_CHART) {
        return "line";
    } else if (vizRecommenderType == VizRecommender.VIZS.SPLINE_CHART) {
        return "spline";

    } else if (vizRecommenderType == VizRecommender.VIZS.LINE_AREA_CHART) {
        return "area";
    } else if (vizRecommenderType == VizRecommender.VIZS.SPLINE_AREA_CHART) {
        return "area-spline";

    } else if (vizRecommenderType == VizRecommender.VIZS.BAR_CHART) {
        return "bar";

    } else if (vizRecommenderType == VizRecommender.VIZS.STEP_CHART) {
        return "step";
    } else if (vizRecommenderType == VizRecommender.VIZS.STEP_AREA_CHART) {
        return "step-area";

    } else {
        throw "Unknown vizReccommenderType.";
    }
};//EndFunction.
