import { DirectoryNotFoundFixer } from './DirectoryNotFoundFixer';
import { FileDoesNotMatchFixer } from './FileDoesNotMatchFixer';
import { FileIsNotSimilarEnoughFixer } from './FileIsNotSimilarEnoughFixer';
import { FileNotFoundFixer } from './FileNotFoundFixer';
import { GitFileFixer } from './GitFileFixer';
import { GithubFixer } from './GithubFixer';
import { OptionalPackagesFixer } from './OptionalPackagesFixer';
import { OverwriteFileFixer } from './OverwriteFileFixer';
import { PackageNotUsedFixer } from './PackageNotUsedFixer';
import { PackageScriptNotFoundFixer } from './PackageScriptNotFoundFixer';
import { PackageVersionFixer } from './PackageVersionFixer';
import { PsalmFixer } from './PsalmFixer';

export function fixerClasses() {
    return [
        // specific fixers:
        GitFileFixer,
        GithubFixer,
        PsalmFixer,
        OptionalPackagesFixer,
        // generic fixers:
        DirectoryNotFoundFixer,
        FileIsNotSimilarEnoughFixer,
        OverwriteFileFixer,
        FileDoesNotMatchFixer,
        FileNotFoundFixer,
        PackageNotUsedFixer,
        PackageScriptNotFoundFixer,
        PackageVersionFixer,
    ];
}
