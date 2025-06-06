/**
 * @file Rule to check if a findIndex comparison should be a call to R.some.
 */

import astUtil from "../util/astUtil";
import { getDocsUrl } from "../util/getDocsUrl";
import { getRemedaMethodVisitors } from "../util/remedaUtil";

const { getExpressionComparedToInt } = astUtil;

const meta = {
  type: "problem",
  docs: {
    description: "Prefer R.some over findIndex comparison to -1",
    url: getDocsUrl("prefer-some"),
  },
  schema: [],
} as const;

function create(context) {
  const visitors = getRemedaMethodVisitors(
    context,
    (node, iteratee, { method }) => {
      if (
        method === "findIndex" &&
        node === getExpressionComparedToInt(node.parent, -1, true)
      ) {
        context.report({
          node,
          message: "Prefer R.some over findIndex comparison to -1",
        });
      }
    },
  );

  return visitors;
}

const rule = {
  create,
  meta,
};

export const RULE_NAME = "prefer-some";
export default rule;
