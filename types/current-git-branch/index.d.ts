// Type definitions for current-git-branch 1.1
// Project: https://www.npmjs.com/package/current-git-branch
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare namespace CurrentGitBranch {
    type CurrentGitBranchOptions = CurrentGitBranchOptionsObject | string[] | string;
    type CurrentGitBranchResult = string | false;

    interface CurrentGitBranchOptionsObject {
        altPath?: string | undefined;
        branchOptions?: string | undefined;
    }
}

declare function CurrentGitBranch(
    args?: CurrentGitBranch.CurrentGitBranchOptions,
): CurrentGitBranch.CurrentGitBranchResult;

export = CurrentGitBranch;
