// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { injectable } from 'inversify';
import { CancellationToken, Event, FileSystemWatcher, GlobPattern, Uri, workspace, WorkspaceFolder, WorkspaceFoldersChangeEvent } from 'vscode';
import { IWorkspaceService } from './types';

@injectable()
export class WorkspaceService implements IWorkspaceService {
    public get rootPath(): string | undefined {
        return workspace.rootPath;
    }
    public get workspaceFolders(): WorkspaceFolder[] | undefined {
        return workspace.workspaceFolders;
    }
    public get onDidChangeWorkspaceFolders(): Event<WorkspaceFoldersChangeEvent> {
        return workspace.onDidChangeWorkspaceFolders;
    }
    public getWorkspaceFolder(uri: Uri): WorkspaceFolder | undefined {
        return workspace.getWorkspaceFolder(uri);
    }
    public asRelativePath(pathOrUri: string | Uri, includeWorkspaceFolder?: boolean): string {
        return workspace.asRelativePath(pathOrUri, includeWorkspaceFolder);
    }
    public createFileSystemWatcher(globPattern: GlobPattern, ignoreCreateEvents?: boolean, ignoreChangeEvents?: boolean, ignoreDeleteEvents?: boolean): FileSystemWatcher {
        return workspace.createFileSystemWatcher(globPattern, ignoreChangeEvents, ignoreChangeEvents, ignoreDeleteEvents);
    }
    public findFiles(include: GlobPattern, exclude?: GlobPattern, maxResults?: number, token?: CancellationToken): Thenable<Uri[]> {
        return workspace.findFiles(include, exclude, maxResults, token);
    }
}
